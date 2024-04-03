import { FormEvent } from "react";
import { API_BASE, API_EVENT, API_USERS } from "../../app/APIurl";

export const submitAddEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)


    fetch(`${API_BASE}${API_EVENT}`, {
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
      return data
  })
  .catch(error => {
      console.error('Возникла ошибка с созданием:', error);
  });
}
export const eventList = () => {
    return fetch(`${API_BASE}${API_EVENT}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => {
        if (response.ok) { 
            return response.json(); 
        } else {
            throw new Error('Код ошибки: ' + response.status);
        }
    })
    .then(data => {
        return data; 
    })
    .catch(error => {
        console.error('Возникла ошибка с получением:', error);
    });
}

//удалить ивент
export const deleteEvent = (id:string) => {
     fetch(`${API_BASE}${API_EVENT}${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => {
        if (response.ok) { 

        } else {
            throw new Error('Код ошибки: ' + response.status);
        }
    })
    .catch(error => {
        console.error('Возникла ошибка с удалением:', error);
    });
}

//получение списка юзеров
export const UserList = (id:string) => {

return fetch(`${API_BASE}${API_EVENT}${id}/${API_USERS}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})
.then(response => {
  
    console.log(response.status);

    if (response.ok) { 
        console.log('Получил:', response.headers.get('Location'));
        return response.json(); 
    } else {

        throw new Error('Код ошибки: ' + response.status);
    }
})
.then(data => {
    console.log('Успешно:', data);
    return data
})
.catch(error => {
    console.error('Возникла ошибка с получением:', error);
});
}
