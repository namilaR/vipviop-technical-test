const useAuth = () => {
  const logIn = (values: ILoginUser): IUser | null => {
    if (values.email === 'me@example.com' && values.password === '123@Abc') {
      const user: IUser = {
        isAuthenticated: true,
        userEmail: values.email,
        userAuthToken: 'xxxxx',
      }
      return user
    }

    return null
  }

  return { logIn }
}
export default useAuth
