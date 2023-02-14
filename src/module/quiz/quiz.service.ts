import { Injectable } from '@nestjs/common';
import { request } from 'http';
import { userUpdateDto } from 'src/Dto/user-update.dto';
@Injectable({})
export class AuthService{
bilal(){

    return "i am signed up through servces";
}
create(body:any){
    return "body body body";
}

update(updateUserDto: userUpdateDto,param:{  userid :number})
{
    return {body:updateUserDto,param};
}

}


