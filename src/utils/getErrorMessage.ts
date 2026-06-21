import axios from "axios"

export const getErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || 'Server error'
  }

  return 'Unknown error'
}
