class apiResponse{
    constructor(
        statuscode,data,message="Successfull"
    ){
        this.statuscode=statuscode
        this.data=data
        this.message=message
        this.success=true
    }
}
export {apiResponse}