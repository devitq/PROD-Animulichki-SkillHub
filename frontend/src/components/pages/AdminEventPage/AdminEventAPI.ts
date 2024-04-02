import { FormEvent } from "react";
import { API_BASE, API_CREATE_EVENT } from "../../app/APIurl";

export const submitAddEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)


    fetch(`${API_BASE}${API_CREATE_EVENT}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(formProps) ,
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
      console.error('Возникла ошибка с созданием:', error);
  });
}

export const eventList = () => {


    fetch(`${API_BASE}${API_CREATE_EVENT}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      },
  })
  .then(response => {
    
      console.log(response.status);

      if (response.ok) { 
          console.log('Получен:', response.headers.get('Location'));
          return response.json(); 
      } else {

          throw new Error('Код ошибки: ' + response.status);
      }
  })
  .then(data => {
      console.log('Успешно:', data);
  })
  .catch(error => {
      console.error('Возникла ошибка с получением:', error);
  });
}