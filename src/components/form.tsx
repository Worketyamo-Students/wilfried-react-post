/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 17/09/2024 - 18:21:05
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/09/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/post', formData);
      console.log('Post créé :', response.data);
    } catch (error) {
      console.log('Erreur lors de la création du post :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 justify-center items-center  bg-slate-700'>
      <div>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className='rounded-md w-[10rem] bg-slate-400 border-solid border '
        />
      </div>
      <div>
        <label htmlFor="content">Contenu :</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className='rounded-md w-[20rem] h-[10rem] border-solid border hover:border-black'
        />
      </div>
      <button type="submit" onClick={handleSubmit} className='rounded-md py-1 px-2 bg-slate-400'>Créer le post</button>
    </form>
  );
};
export default Form;