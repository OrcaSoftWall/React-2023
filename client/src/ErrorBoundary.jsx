import { Component } from 'react'
import styles from './ErrorBoundary.module.css'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {

        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log("Component Did Catch is triggered___ ", errorInfo)
    }

    render() {
        if (this.state.hasError) {

            return (
                <>
                    <section className={styles.notFound}>
                        <h1>500</h1>
                        <h2>Something went wrong</h2>
                        <h4>{error}</h4>
                        <p>{errorInfo}</p>
                    </section>
                </>
            )
            // console.log("ErrorBoundary>>>>>>>>>>>>>>>>>>>>>>>>>")
            // window.location.href = '/error'
            // return null
        }

        return this.props.children
    }
}

export default ErrorBoundary