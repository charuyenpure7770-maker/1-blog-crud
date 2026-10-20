const {blogs} = require("../data/blogs");

const sendBlog = (req, res)=>{
    try{
      
      res.status(200).json({
        success:true,
        message:"blogs fetched successfully!!",
        data:blogs
      })
    }catch(err){
     return res.status(500).json({
        success:false,
        message:"something went wrong",
        error:err.message
      })
    }
}


const sendSingleBlog = (req, res)=>{
    try{
    const blogId = req.params.id;
    const blog = blogs.find(obj=> obj.id === blogId);
    if(!blog){
       return res.status(404).json({
        success:false,
        message:"something went wrong?"
       }) 
    }
      res.status(200).json({
        success:true,
        message:"blogs data fetch successfully!!",
        data: blog
       })
    }
    catch(err){
    res.status(500).json({
        success:false,
        message:"something went wrong",
        error:err.message
     })
    }
}

const createBlog =  (req, res)=>{
    try{
    let body = req.body;
    if(!body.title || !body.content){
        return res.status(404).json({
            success:false,
            message:"something went wrong"
        })
    }
    let new_obj ={
        id: Date.now().toString(),
        title:body.title,
        content:body.content,
        createdat:Date.now().toString(),
        updatedat: null
    }
    blogs.unshift(new_obj);
    res.status(200).json({
        success:true,
        message:"blog is created successfully!!",
        data:new_obj
    })
    }
    catch(err){
     res.status(500).json({
        success:false,
        message:"something went wrong",
        error:err.message
     })
    }
}

const updateBlog = (req, res)=>{
   try{
     let updateId = req.params.id;
    let body = req.body;
    let getIndex = blogs.findIndex(obj=> obj.id === updateId);
    if(getIndex === -1){
         return res.status(404).json({
            success:false,
            message:"something went wrong"
        })
    }
      if(!body.title || !body.content){
        return res.status(404).json({
            success:false,
            message:"something went wrong"
        })
      }
      let updated_obj ={
        ...blogs[getIndex],
        title:body.title,
        content:body.content,
        updateId:Date.now().toString(),
      }
      res.status(200).json({
        success:true,
        message:"blog is updated successfully!!",
        data:updated_obj
      })
   }
   catch(err){
 res.status(500).json({
    message:"something went wrong",
    success:false,
    error:err.message
 })
   }
}

const deleteBlog = (req,res)=>{
  try{
      let delete_Id = req.params.id;
    let getIndex= blogs.findIndex(obj=> obj.id === delete_Id);
    if(getIndex === -1){
        return res.status(404).json({
            success:false,
            message:"something went wrong"
        })
    }
    let deleteBlog = blogs.splice(getIndex, 1);
    res.status(200).json({
        success:true,
        message:"blog is deleted succesfully",
        data:deleteBlog[0]
    })
  }catch(err){
   res.status(500).json({
    success:false,
    message:"something went wrong",
    error:err.message
   })
  }
}

module.exports ={
    sendBlog,
    sendSingleBlog,
    createBlog,
    updateBlog,
    deleteBlog
}