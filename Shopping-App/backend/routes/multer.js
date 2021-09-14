//var multer=require('multer')
//var store = multer.diskStorage(
//    {
//        destination:(req,file,path)=>
//        {
//            path(null,'public/images')
//        },
//        filename:(req,file,path)=>
//        {
//            path(null,file.originalname)
//        }
//    }
//)
//var upload=multer({storage:store})
//
//module.exports=upload;
const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,path)=>
        {
            path(null,'public/images')
        },
        filename:(req,file,path)=>
        {
            path(null,file.originalname)
        }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};
const upload = multer({ storage, fileFilter });
module.exports=upload;

