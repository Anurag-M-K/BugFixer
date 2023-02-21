import { configureStore } from "@reduxjs/toolkit";
import { adminSlice, setAdminDetails } from "./features/adminSlice";
import { alertSlice,showLoading}  from "./features/alertSlice";
import { setUserDetails, userSlice } from "./features/userSlice";
import {userUpdatedSlice} from "./features/userUpdatedSlice";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";
import {questionSlice} from "./features/questionSlice";
import { usersImageSlice } from "./features/userProfilePicSlice";
import {answerSlice} from "./features/answerSlice";
import {voteSlice} from "./features/voteSlice";
import { completeUsersDetailsSlice } from "./features/completeUserDetailsSlice";
import {singleQuestionSlice} from "./features/singleQuestionSlice";
import { chatSlice } from "./features/chatSlice";
import { commentSlice }  from "./features/commentSlice";
import { userProfileQuestionsSlice } from "./features/userProfileQuestions";
import { adminTokenSlice } from "./features/adminTokenSlice";
import { communityPostsSlice } from "./features/communityPostsSlice";
import { adminQuestionSlice } from "./features/adminQuestionSlice";


const persistConfig = {
    key:"root",
    version:1,
    storage
};

const reducer = combineReducers({
    user:userSlice.reducer,
    admin:adminSlice.reducer,
    alerts:alertSlice.reducer,
    question:questionSlice.reducer,
    updatedUser:userUpdatedSlice.reducer,
    image:usersImageSlice.reducer,
    answer:answerSlice.reducer,
    vote:voteSlice.reducer,
    users:completeUsersDetailsSlice.reducer,
    singleQuestion:singleQuestionSlice.reducer,
    chat:chatSlice.reducer,
    comment:commentSlice.reducer,
    userProfileQuestions:userProfileQuestionsSlice.reducer,
    adminToken:adminTokenSlice.reducer,
    communityPosts:communityPostsSlice.reducer,
    adminQuestion:adminQuestionSlice.reducer


})

const persistedReducer = persistReducer(persistConfig,reducer);

export default configureStore({
    reducer:persistedReducer
});

    