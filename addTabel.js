import React, { useEffect, useState } from 'react';

const AddFormData = () => {
    // Define your state using the useState hook
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    // Define your event handlers
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('https://api.example.com/endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          // Data berhasil dikirim
          console.log('Data berhasil dikirim!');
          // Reset form setelah pengiriman berhasil
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          // Terjadi kesalahan saat mengirim data
          console.error('Gagal mengirim data:', response.statusText);
        }
      } catch (error) {
        // Tangani kesalahan jaringan atau lainnya
        console.error('Error:', error);
      }
    };
  
    // Render your JSX
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nama:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Pesan:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Kirim</button>
      </form>
    );
  };
  
  export default AddFormData;
  