import { FormEvent } from "react";
import { API_BASE, API_CREATE_TOKEN, API_USERS } from "../../app/APIurl";
  
//логин
export const submitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)


    fetch(`${API_BASE}${API_CREATE_TOKEN}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formProps) 
  })
  .then(response => {
    
      console.log(response.status);

      if (response.ok) { 
          console.log('Создан:', response.headers.get('Location'));
          return response.json(); 
      } else {

          throw new Error('Код ошибки: ' + response.status);
      }
  })
  .then(data => {
      console.log('Успешно:', data);
  })
  .catch(error => {
      console.error('Возникла ошибка с логином:', error);
  });
}

//регистрация
export const submitRegister = (e: FormEvent<HTMLFormElement>, navigate: Function) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)


    fetch(`${API_BASE}${API_USERS}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formProps) 
    })
    .then(response => {
        console.log(response.status);
        if (response.ok) { 
            console.log('Создан:', response.headers.get('Location'));
            navigate('../successful');
            return response.json(); 
        } else {

            throw new Error('Код ошибки: ' + response.status);
        }
    })
    .then(data => {
        console.log('Успешно:', data);
    })
    .catch(error => {
        console.error('Возникла ошибка с регой:', error);
    });
}