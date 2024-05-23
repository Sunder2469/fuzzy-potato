import { useAuthStore } from '@/stores/authStore'
import type RequestOptions from '@/interfaces/RequestOptions'

export const fetchWrapper = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE')
}

export const baseUrl: string = `${import.meta.env.VITE_BASE_API_URL}`;

function request(method: string) {
  return (url: string, body?: {}) => {
    const headers: Headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')

    const { user } = useAuthStore()
    if (!!user?.token && url.startsWith(import.meta.env.VITE_BASE_API_URL)) {
      headers.set('Authorization', `Bearer ${user.token}`)
    }

    const requestOptions: RequestOptions = {
      method,
      headers
    }

    if (body) {
      requestOptions.body = JSON.stringify(body)
    }

    const request: RequestInfo = new Request(url, requestOptions)
    return fetch(request).then(handleResponse)
  }
}

function handleResponse(response: Response): Promise<any> {
  return response.json().then(data => {
    if (!response.ok) {
      const { user, logout } = useAuthStore()
      if ([401, 403].includes(response.status) && user) {
        logout()
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}