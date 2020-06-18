var env=process.env.NODE_ENV || 'development';
var confiq=require('./config.json');
if(env==='development' || env==='test'){
    var envConfig=confiq[env];
    Object.keys(envConfig).forEach((key)=>{
        process.env[key]=envConfig[key]
    });
}