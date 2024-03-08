import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import { StoreTypes, AppDispatch } from '.'

// use hook 节约每次引入type的工作
// useSelector: 节约配置RootState type

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<StoreTypes> = useSelector
