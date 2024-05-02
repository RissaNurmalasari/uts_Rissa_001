import React, { useState, useEffect } from "react";

function Home() {
  const [priorities, setPriorities] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Panggil API untuk mendapatkan data Priorities
    fetch('base_url/api/priority-issues')
      .then(response => response.json())
      .then(data => setPriorities(data));

    // Panggil API untuk mendapatkan data Departments
    fetch('base_url/api/division-department')
      .then(response => response.json())
      .then(data => setDepartments(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logika untuk menangani penambahan isu pelanggan ke dalam database melalui API
    // ...
  };

  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Create Customer Service Issue</h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <textarea name="description" className="form-control" rows="3"></textarea>
                      </div>
                      <div className="form-group">
                        <label>Priority</label>
                        <select name="priority" defaultValue="">
                          <option value="" disabled>Select Priority</option>
                          {priorities.map(priority => (
                            <option key={priority.id} value={priority.id}>{priority.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Department</label>
                        <select name="department" defaultValue="">
                          <option value="" disabled>Select Department</option>
                          {departments.map(department => (
                            <option key={department.id} value={department.id}>{department.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                {/* Tampilkan tabel Customer Service */}
                {/* ... */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
