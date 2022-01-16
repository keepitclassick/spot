export default function EmailForm() {
  return (
    <div className="container">
      <form>
      {/* single item */}
       <div className="single-item">
         <label htmlFor="name">name</label>
         <input type="text" name="name"
         className="name" placeholder="Your name" />
       </div>
       {/* end of single item */}
       <div className="single-item">
         <label htmlFor="email">email</label>
         <input type="text" name="email"
         className="name" placeholder="Your email" />
       </div>

       <div className="text-area single-item">
         <label htmlFor="message">Messqge</label>
    <textarea name="message" id=""
    cols="30" rows="5" placeholder="Your message"></textarea>
       </div>

       <div className="btn">
         
       </div>
      </form>
    </div>
  )
}