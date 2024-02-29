//upload video
import { commonAPI } from './commonAIP';
import { SEVER_URL } from './server_url';
// add component call upload video -store video in localhost
export const uploadVideoAPI =async(video)=>{
    // send response to add component
  return await commonAPI("POST",`${SEVER_URL}/allvideos`,video)

}
// get video api called by view 
export const getAllvideosAPI= async()=>{
  return await commonAPI("GET",`${SEVER_URL}/allvideos`,"")
}
// store watch history by videoCard to localhost
export const saveHistoryAPI= async(videoDetails)=>{
  return await commonAPI('POST',`${SEVER_URL}/history`,videoDetails)
}
// get history to watch component to localhost
export const getHistoryAPI= async()=>{
  return await commonAPI("GET",`${SEVER_URL}/history`,"")
}
// remove history to watch component
export const removeHistoryAPI= async(videoId)=>{
  return await commonAPI("DELETE",`${SEVER_URL}/history/${videoId}`,{})
}
// remove video in to the allvideo  by videocard
export const removeVideoAPI= async(videoId)=>{
  return await commonAPI("DELETE",`${SEVER_URL}/allvideos/${videoId}`,{})
}
// save category
export const addCategoryAPI= async(CategoryDetails)=>{
  return commonAPI("POST",`${SEVER_URL}/categories`,CategoryDetails)
}
// get category to category component
export const getCategoryAPI=async()=>{
  return await commonAPI("GET",`${SEVER_URL}/categories`,"")
}
// remove category
export const removeCategoryAPI=async(categoryId)=>{
  return await commonAPI("DELETE",`${SEVER_URL}/categories/${categoryId}`,{})
}
// get a single video API
export const getAVideoAPI= async (videoId)=>{
  return await commonAPI("GET",`${SEVER_URL}/allvideos/${videoId}`,"")
}
// update category API
export const updateCategoryAPI= async (categoryId,updateCategoryDetails)=>{
  return await commonAPI("PUT",`${SEVER_URL}/categories/${categoryId}`,updateCategoryDetails)
}
//get single categoryAPI
export const getSingleCategoryAPI = async (categoryId)=>{
   return await commonAPI("GET",`${SEVER_URL}/categories/${categoryId}`,"")
}