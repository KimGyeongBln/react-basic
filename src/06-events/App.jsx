// import logo from "./logo.svg";
// import "./App.css";

// function Header(props) {
    function Header({ title, onChangeMode }) {
        //  title과 onChangeMode
        //   console.log("props", props);
        console.log("title:", title);
        return (
          <header>
            <h1>
              {/* 클릭 이벤트 부착 */}
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault(); // 이벤트의 기본 동작을 막는 것(동작 막는거 중요함)
                  // props.onChangeMode();    // props로 불렀을때
                  onChangeMode();
                }}
              >
                {/* {props.title} */}
                {title}
              </a>
            </h1>
          </header>
        );
      }
      
      // function Nav(props) {
      function Nav({ topics, onChangeMode }) {
        //  topice, onChangeMode
        const lis = [];
        for (let i = 0; i < topics.length; i++) {
          let t = topics[i];
          lis.push(
            <li key={t.id}>
              <a
                id={t.id}
                href={"/read/" + t.id}
                onClick={(envent) => {
                  envent.preventDefault(); // 기본 동작 막기
                  onChangeMode(event.target.id);
                }}
              >
                {t.title}
              </a>
            </li>
          );
        }
        return (
          <nav>
            <ol>{lis}</ol>
          </nav>
        );
      }
      
      function Article(props) {
        return (
          <article>
            <h2>{props.title}</h2>
            {props.body}
          </article>
        );
      }
      
      function App() {
        const topics = [
          { id: 1, title: "html", body: "html is ..." },
          { id: 2, title: "css", body: "css is ..." },
          { id: 3, title: "javascript", body: "javascript is ..." },
        ];
      
        return (
          <div className="App">
            {/* onChangeMode 이벤트 핸들러 전달 */}
            <Header
              title="WEB"
              onChangeMode={function () {
                alert("Header");
              }}
            ></Header>
            {/* Nav 각각의 타이틀 링크를 누르면 alert창이 뜨도록  하기*/}
            <Nav
              topics={topics}
              onChangeMode={(id) => {
                alert(id);
              }}
            ></Nav>
            <Article title="Welcome" body="Hello, Web"></Article>
          </div>
        );
      }
      
      export default App;
      