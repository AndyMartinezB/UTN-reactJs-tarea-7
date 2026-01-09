import ReturnToHome from "../components/ReturnToHome"
const NotFound = () => {
  return (
    <>
      <div>
        <h2>Error 404: Página no encontrada</h2>
        <p>La página solicitada no existe.</p>
      </div>
      <ReturnToHome />
    </>
  )
}

export default NotFound