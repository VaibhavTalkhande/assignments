


const Form = (handleSubmit) => {

   

    return (
        <form
        onSubmit={handleSubmit}
        
      style={{ display: 'flex', flexDirection: 'column', width: '30%', margin: '0 auto', gap: '1rem',backgroundColor: 'lightblue', padding: '1rem' }}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" />
        <label>Social Media</label>
        <label htmlFor="linkedin">LinkedIn</label>
        <input type="url" id="linkedin" name="linkedin" />
        <label htmlFor="twitter">Twitter</label>
        <input type="url" id="twitter" name="twitter" />
        <label htmlFor='interests'>Interests</label>
        <select id='interests' name='interests'>
          <option value=''>--Please choose an option--</option>
          <option value='Frontend'>Frontend</option>
          <option value='Backend'>Backend</option>
          <option value='Fullstack'>Fullstack</option>
          <option value='DevOps'>DevOps</option>
          <option value='QA'>QA</option>
          <option value='UX/UI'>UX/UI</option>
          <option value='Data Science'>Data Science</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    )
  
}


export default Form