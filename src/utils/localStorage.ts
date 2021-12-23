export function getLocalStorage<T>(key: string): T | null {
  const data = process.browser && localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

export function setLocalStorage(key: string, data: {} | string) {
  process.browser && localStorage.setItem(key, JSON.stringify(data))
}

export function removeLocalStorage(key: string) {
  process.browser && localStorage.removeItem(key)
}
