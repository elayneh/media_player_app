import { createSlice } from '@reduxjs/toolkit'


export const SongSlice = createSlice({
    name:'Song',
    initialState:{
        songs:null,
        currentSong:{},
        selected:'',
        error:null
    },
    reducers:{
        getSongs:(state,action)=>{
            state.songs = action.payload
        },
        addSong:(state,action)=>{
            state.songs = [action.payload,...state.songs]
        },
        deleteSong:(state,action)=>{
            state.songs = state.songs.filter((song)=> song._id !== action.payload._id)
        },
        updateSong:(state,action)=>{
            state.songs = action.payload
            // console.log('first',state.currentSong)
            // state.currentSong = state.songs.filter((song)=> song._id === state.currentSong._id)
            // console.log('second',state.currentSong)
        },

        playCurrent:(state,action)=>{
            state.currentSong = action.payload
        },
        single:(state,action)=>{
            state.selected = action.payload
        },
        addError:(state,action)=>{
            state.error = action.payload
        }
    }
}) 
export const {getSongs,addSong,deleteSong,updateSong,playCurrent,single,addError} = SongSlice.actions;

export default SongSlice.reducer