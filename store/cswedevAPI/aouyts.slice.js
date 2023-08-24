import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_aouyt_list = createAsyncThunk(
  "aouyts/api_v1_aouyt_list",
  async payload => {
    const response = await apiService.api_v1_aouyt_list(payload)
    return response.data
  }
)
export const api_v1_aouyt_create = createAsyncThunk(
  "aouyts/api_v1_aouyt_create",
  async payload => {
    const response = await apiService.api_v1_aouyt_create(payload)
    return response.data
  }
)
export const api_v1_aouyt_retrieve = createAsyncThunk(
  "aouyts/api_v1_aouyt_retrieve",
  async payload => {
    const response = await apiService.api_v1_aouyt_retrieve(payload)
    return response.data
  }
)
export const api_v1_aouyt_update = createAsyncThunk(
  "aouyts/api_v1_aouyt_update",
  async payload => {
    const response = await apiService.api_v1_aouyt_update(payload)
    return response.data
  }
)
export const api_v1_aouyt_partial_update = createAsyncThunk(
  "aouyts/api_v1_aouyt_partial_update",
  async payload => {
    const response = await apiService.api_v1_aouyt_partial_update(payload)
    return response.data
  }
)
export const api_v1_aouyt_destroy = createAsyncThunk(
  "aouyts/api_v1_aouyt_destroy",
  async payload => {
    const response = await apiService.api_v1_aouyt_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const aouytsSlice = createSlice({
  name: "aouyts",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_aouyt_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_aouyt_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_aouyt_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_aouyt_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_aouyt_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_aouyt_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_aouyt_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_aouyt_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_aouyt_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_aouyt_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_aouyt_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_aouyt_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_aouyt_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_aouyt_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_aouyt_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_aouyt_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_aouyt_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_aouyt_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_aouyt_list,
  api_v1_aouyt_create,
  api_v1_aouyt_retrieve,
  api_v1_aouyt_update,
  api_v1_aouyt_partial_update,
  api_v1_aouyt_destroy,
  slice: aouytsSlice
}
