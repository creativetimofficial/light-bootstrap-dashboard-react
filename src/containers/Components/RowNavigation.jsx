import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';




const codeSidebar = `<li className={this.activeRoute("/table")}>
    <NavLink to={'/table'} className="nav-link" activeClassName="active">
        <i className="pe-7s-note2"></i>
        <p>Table List</p>
    </NavLink>
</li>`;
const codeSidebarApp = `<Route path="/table" component={TableList}/>`;
const codeSidebarImages = `import imagine from 'img/sidebar-5.jpg';
import logo from 'img/reactlogo.png';`;



class RowNavigation extends Component {
    render() {
        return (
            <div id="navbar-row" className="tim-row">
                <h2>Navigation</h2>
                <legend></legend>
                <p>
                    For navigation there are three main components <code>Sidebar</code>, <code>Header</code> and <code>Footer</code>.
                </p>
                <h3>Sidebar</h3>
                <p>
                    This component is the main navigation. To use it, you need to import it:
                </p>
                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {`import Sidebar from 'components/Sidebar/Sidebar';`}
                </SyntaxHighlighter>
                <p>
                    This component is the left menu.
                </p>
                <p>
                    For it to work, it has two main components. The first one you will find it in <code>src/components/Sidebar/Sidebar.jsx</code>.
                    This is the component from the <code>Sidebar</code> component itself. We've decided to create a variable for the routes, these are found in <code>src/routes/app.jsx</code>.
                    We import them in this componente (<code>Sidebar</code>) and create a navigation link to each one. These navigation links took like this:
                </p>
                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {codeSidebar}
                </SyntaxHighlighter>
                <p>
                    You can see here <code>/table</code>. This is the route that will be shown in the browser.
                </p>
                <p>
                    This component is tied to the second main component in <code>src/containers/App/App.jsx</code>.
                    Here you will find the routes for the <code>Sidebar</code> component. Again, we import them here as well and create them dynamically. These look like this:
                </p>
                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {codeSidebarApp}
                </SyntaxHighlighter>
                <p>
                    You can se here the same path as before (as in <code>Sidebar</code>) <code>/table</code>.
                    You then have to specify what has to be rendered on user click, in this example is <code>TableList</code>.
                </p>
                <p>
                    If you want to change the logo and background image, you will have to import them in
                    <code>src/components/Sidebar/Sidebar.jsx</code> like this:
                </p>
                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {codeSidebarImages}
                </SyntaxHighlighter>
                <p>
                    where <code>imagine</code> is the background image and <code>logo</code> is the logo image.
                </p>
                <p>
                    To change the color of the sidebar use the <code>data-color</code> property in <code>Sidebar</code> componet.
                </p>
                <h3>Header</h3>
                <p>
                    This component is the header navigation. To use it, you need to import it:
                </p>
                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {`import Header from 'components/Header/Header';`}
                </SyntaxHighlighter>

                <p>
                    You can change it's elements in <code>src/components/Header/HeaderLinks.jsx</code>.
                </p>
                <p>
                    This component was made using react-bootstrap components.
                    For more information please refer to{' '}
                    <a
                        href="https://react-bootstrap.github.io/components.html#navigation"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            react-bootstrap documentation
                        </a>.
                    </p>
                    <div className="alert alert-warning">
                        <strong>Warning!</strong> For this component to work properly, do not change the{' '}
                        <code>onClick</code> property in the <code>Navbar.Toggle</code> element of the <code>Header</code>.
                    </div>
                    <h3>Footer</h3>
                    <p>
                        This is the footer navigation. To use it, you need to import it:
                    </p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {`import Footer from 'components/Footer/Footer';`}
                    </SyntaxHighlighter>
                    <p>
                        You can change it's elements in <code>src/components/Footer/Footer.jsx</code>.
                    </p>
                </div>

            );
        }
}

export default RowNavigation;
