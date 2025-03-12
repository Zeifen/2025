
const Validate = ({errors}) => {
  return (
    <>
        <div className='alert alert-danger'>
            <ul>
                {errors.map((error, i) =>(
                    <li key={i}>{error}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Validate;