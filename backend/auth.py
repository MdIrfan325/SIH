from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def get_current_user(token: str = Depends(oauth2_scheme)):
    # TODO: Validate token and return user
    if token != "valid_token":
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")
    return {"username": "testuser"}
