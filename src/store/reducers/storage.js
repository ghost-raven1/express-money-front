import { createSlice } from "@reduxjs/toolkit";
import api from "../api.js";

const storageSlice = createSlice({
  name: "storage",
  initialState: {},
  reducers: {},
});

export const uploadPassportAsync =
  ({ data }) =>
  async (dispatch) => {
    await api
      .post(`/storage/upload_passport/`, data, {
        headers: {
          "x-forwarded-authorization": `Bearer ${localStorage.getItem(
            "access"
          )}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((r) => {
        console.log("Загрузка паспортных данных ==> успешно", r?.data);
        console.log("Можете переходить на следующий шаг")
      })
      .catch((e) => {
        console.error("Загрузка паспортных данных ==> ошибка", e?.response);
      });
  };

export const uploadFileAsync =
  ({ data }) =>
  async (dispatch) => {
    await api
      .post(`/storage/upload_file/`, data)
      .then((r) => {
        console.log("Загрузка файла ==> успешно", r?.data);
      })
      .catch((e) => {
        console.error("Загрузка файла ==> ошибка", e?.response);
      });
  };

export const userFileDownloadAsync =
  ({ name }) =>
  async (dispatch) => {
    await api
      .get(`/storage/user_file/${name}/download`)
      .then((r) => {
        console.log(`Скачивание файла ${name} ==> успешно`, r?.data);
      })
      .catch((e) => {
        console.error(`Скачивание файла ${name} ==> ошибка`, e?.response);
      });
  };

export const getUserFileAsync =
  ({ name }) =>
  async (dispatch) => {
    await api
      .get(`/storage/user_file/${name}`, {
        headers: {
          "x-forwarded-authorization": `Bearer ${localStorage.getItem(
            "access"
          )}`,
        },
      })
      .then((r) => {
        console.log(`Получение файла ${name} ==> успешно`, r?.data);
      })
      .catch((e) => {
        console.error(`Получение файла ${name} ==> ошибка`, e?.response);
      });
  };

export const getUserFileListAsync =
  ({ params }) =>
  async (dispatch) => {
    await api
      .get(`/storage/user_file`, {
        params: params,
        headers: {
          "x-forwarded-authorization": `Bearer ${localStorage.getItem(
            "access"
          )}`,
        },
      })
      .then((r) => {
        console.log(`Получение списка файлов ==> успешно`, r?.data);
      })
      .catch((e) => {
        console.error(`Получение списка файлов ==> ошибка`, e?.response);
      });
  };

export const getPublicFileAsync =
  ({ name }) =>
  async () => {
    await api
      .get(`/storage/public_file/${name}`)
      .then((r) => {
        console.log(`Получение публичного файла ${name} ==> успешно`, r?.data);
      })
      .catch((e) => {
        console.error(
          `Получение публичного файла ${name} ==> ошибка`,
          e?.response
        );
      });
  };

export const getPublicFileListAsync =
  ({ params }) =>
  async (dispatch) => {
    await api
      .get(`/storage/public_file`, { params: params })
      .then((r) => {
        console.log(`Получение списка публичных файлов ==> успешно`, r?.data);
      })
      .catch((e) => {
        console.error(
          `Получение списка публичных файлов ==> ошибка`,
          e?.response
        );
      });
  };

export const {} = storageSlice.actions;

export default storageSlice.reducer;
