import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { List, Button, Spin } from 'antd';

// Define initial state
const initialState = {
  blockchain: [],
  loading: false,
  error: null,
};

// Define thunk action to fetch blockchain data
export const fetchBlockchain = createAsyncThunk(
  'blockchain/fetchBlockchain',
  async () => {
    const response = await axios.get('https://api.example.com/blockchain');
    return response.data;
  }
);

// Create blockchain slice
const blockchainSlice = createSlice({
  name: 'blockchain',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlockchain.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlockchain.fulfilled, (state, action) => {
        state.loading = false;
        state.blockchain = action.payload;
      })
      .addCase(fetchBlockchain.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Create store
const store = configureStore({
  reducer: {
    blockchain: blockchainSlice.reducer,
  },
});

// App component
const App = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain.blockchain);
  const loading = useSelector((state) => state.blockchain.loading);
  const error = useSelector((state) => state.blockchain.error);

  useEffect(() => {
    dispatch(fetchBlockchain());
  }, [dispatch]);

  return (
    <div>
      <h1>BlocksBearsV3 Blockchain</h1>
      {loading ? (
        <Spin size="large" />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <List
          dataSource={blockchain}
          renderItem={(item) => (
            <List.Item>{item}</List.Item>
          )}
        />
      )}
      <Button
        type="primary"
        onClick={() => dispatch(fetchBlockchain())}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Refresh'}
      </Button
        import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { List, Button, Spin } from 'antd';

// Define initial state
const initialState = {
  blockchain: [],
  loading: false,
  error: null,
};

// Define thunk action to fetch blockchain data
export const fetchBlockchain = createAsyncThunk(
  'blockchain/fetchBlockchain',
  async () => {
    const response = await axios.get('https://api.example.com/blockchain');
    return response.data;
  }
);

// Create blockchain slice
const blockchainSlice = createSlice({
  name: 'blockchain',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlockchain.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlockchain.fulfilled, (state, action) => {
        state.loading = false;
        state.blockchain = action.payload;
      })
      .addCase(fetchBlockchain.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Create store
const store = configureStore({
  reducer: {
    blockchain: blockchainSlice.reducer,
  },
});

// App component
const App = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain.blockchain);
  const loading = useSelector((state) => state.blockchain.loading);
  const error = useSelector((state) => state.blockchain.error);

  useEffect(() => {
    dispatch(fetchBlockchain());
  }, [dispatch]);

  return (
    <div>
      <h1>BlocksBearsV3 Blockchain</h1>
      {loading ? (
        <Spin size="large" />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <List
          dataSource={blockchain}
          renderItem={(item) => (
            <List.Item>{item}</List.Item>
          )}
        />
      )}
      <Button
        type="primary"
        onClick={() => dispatch(fetchBlockchain())}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Refresh'}
      </Button
    </div>
  );
};

export default App
