import logo from './logo.svg';
//import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
 
export default function App() {
  return (
    <BrowserRouter>
    
    <div>
      
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Sessions" component={Sessions} />
      </Switch>
    </div>
    </BrowserRouter>
      ); 
}
 
function Home() {
  return(
      <>
      <Navbar />
      <div>
        <center>
      <h1>SESSIONS TO BE COVERED</h1></center>
      </div>
      <center>
      <table border="20%" rowspan="30%" colspan="30%" height="400px" width="40%">
        <tr>
          <td>Sr no</td>
          <td>Topics</td>
        </tr>
        <tr>
          <td>1</td>
          <td>BOOTSTRAP</td>
        </tr>
        <tr>
          <td>2</td>
          <td>JAVASCRIPT</td>
        </tr>
        <tr>
          <td>3</td>
          <td>AWS SERVICE</td>
        </tr>
        <tr>
          <td>4</td>
          <td>APP DEVELOPMENT</td>
        </tr>
        <tr>
          <td>5</td>
          <td>MACHINE LEARNING</td>
        </tr>
        <tr>
          <td>5</td>
          <td>AI LEARNIG</td>
        </tr>
      </table>
      </center>
      </>
  );
}
 
function Contact() {
  return(
      <>
      <Navbar />
      <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 mx-auto col-10 text-dark ">
                        <form action="" >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" 
                                placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" 
                                class="form-control"
                                 id="exampleFormControlInput1" 
                                 name="email" 
                                 
                                placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" 
                                 placeholder="Phone number" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                   ></textarea>
                            </div>
                        </form>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">Submit</button>
                        </div>
                    </div>
                </div>

            </div>
      
      
      </>
  );
}

function Sessions() {
  return(
      <>
      <Navbar /><center>
      <div>
      <h4>BOOTSTRAP</h4>
      <center>
      <p font-size="200px">Bootstrap is a potent front-end framework used to create modern websites and web apps.
        It's open-source and free to use, yet features numerous HTML and CSS templates for UI interface elements such as buttons and forms.
         Bootstrap also supports JavaScript extensions.</p></center>
         <tr>
           <td>Fewer Cross browser bugs.</td></tr>
           <tr> <td>A consistent framework that supports major of all browsers and CSS compatibility fixes.</td></tr>
           <tr> <td>Lightweight and customizable.</td></tr>
           <tr> <td>Responsive structures and styles.</td></tr>
           <tr><td>Several JavaScript plugins using the jQuery.</td></tr>
           <tr><td>Good documentation and community support.</td></tr>
      <h4>JAVA SCRIPT</h4>
      <p>JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. 
        Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.
        What is JavaScript and its advantages?
  JavaScript is a dynamic computer programming language. ... It is an interpreted programming language with object-oriented capabilities. Advantages of JavaScript:
 The advantages of using JavaScript are the following: Less server interaction − You can validate user input before sending the page off to the server.</p>
      <h4>AWS SERVICE</h4>
      <p>Amazon Web Services, Inc. is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, 
        and governments, on a metered pay-as-you-go basis.Amazon Web Services offers a broad set of global cloud-based products including compute, storage, 
        databases, analytics, networking, mobile, developer tools, management tools, IoT, security 
        and enterprise applications. These services help organizations move faster, lower IT costs, and scale.</p>
      <h4>APP DEVELOPMENT </h4>
      <p>App Development refers to the creation of computer applications for use on mobile devices such as tablets, smartphones and smart watches. ... Mobile applications are 
        designed and built for different operating systems and developers will want to learn how to build for both the Android operating system and Apple's iOS.
        It allows the developer to write the code once and employ it across all platforms – Android, iOS or Windows. Instead of writing fresh codes for
         every platform, developers can reuse the same code across all platforms.
         This also cuts down on repetitive tasks, thus eliminating drudgery.</p>
      <h4>MACHOINE LEARNING</h4>
      <p>Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes 
        without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.
        Machinery is being extensively used because of certain advantages.
The following are the chief advantages of the use of machinery:
Use of Natural Forces:
Heavy and Delicate Work:
Faster Work:
More Accurate Work:
Strain on:
Cheap Goods:
Mobility of Labour:</p>
      <h4>AI LEARNING</h4>
      <p>AI-based Learning Management Systems use algorithms to predict the user's next steps. This requires experience.
         The system learns the user's behavior and then enables personalized utilization of learning material. 
         This offers the learners and also the teachers numerous advantages.Machine learning is a branch of artificial intelligence (AI) and computer science 
         which focuses on the use of data and algorithms
         to imitate the way that humans learn, gradually improving its accuracy. ... Machine learning is an important component of the growing field of data science</p>
      </div>
      </center>
      </>
  );
}
