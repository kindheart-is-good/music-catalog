import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ITrack} from "../models/ITrack";

export const tracksAPI = createApi({
    reducerPath: 'tracksAPI',     // reducerPath - это некоторый уникальный ключ, который будет однозначно определять текущий сервис
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'}),
    endpoints: (build) => ({
        fetchAllTracks: build.query<ITrack[], number>({   // А в качестве второго дженерика мы можем указать
            // тип аргумента который будет ожидать этот хук,
            // в данном случае мы будем делать пагинацию (постраничный вывод)
            // и аргументом можем указать лимит на количество получаемых постов
            // (а сразу авто писал без типизации и параметра и тоже всё работало).
            query: (limit: number = 5) => ({
                // Т.о. в данном случае по умолчанию у нас лимит = 5,
                // и сервер нам будет возвращать всего 5 элементов в массиве.
                url: '/tracks',
                params: {                                       // И также необходимо указать сам query-параметр который будет уходить на сервер
                    _limit: limit                               // т.е. это те самые параметры которые мы указываем в строке запроса
                }                                               // например вот так: https://jsonplaceholder.typicode.com/users?_limit=5
            })
        })
    })
})
