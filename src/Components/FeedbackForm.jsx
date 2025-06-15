import React, { useState } from 'react';
import './FeedbackForm.css'; // Importar CSS para el estilo

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: '' // Nuevo estado para calificación
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
          Nombre: ${formData.name}
          Correo electrónico: ${formData.email}
          Comentarios: ${formData.feedback}
          Calificación: ${formData.rating}
        `;
        const isConfirmed = window.confirm(`Por favor, confirma tus detalles:\n\n${confirmationMessage}`);
        if (isConfirmed) {
            console.log('Enviando comentarios:', formData);
            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating: '' // Reiniciar calificación después del envío
            });
            alert('¡Gracias por tus valiosos comentarios!');
        }
    };
  return (
    <>
    <nav>
    Cuéntanos qué piensas
    </nav>
    <form onSubmit={handleSubmit} className="feedback-form">
        <h2>¡Nos encantaría saber de ti!</h2>
        <p>Por favor, comparte tus comentarios con nosotros.</p>
        <input
          type="text"
          name="name"
          placeholder="Tu Nombre"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Tus Comentarios"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
         <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
                    <span>Califícanos:</span>
                    <p><input
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={handleChange}
                    /> 1</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={handleChange}
                    /> 2</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={handleChange}
                    /> 3</p>
                   <p> <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={handleChange}
                    /> 4</p>
                    <p><input
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={handleChange}
                    /> 5</p>
                </div>
        <button type="submit">Enviar Comentarios</button>
      </form>
    </>
  );
};

export default FeedbackForm;