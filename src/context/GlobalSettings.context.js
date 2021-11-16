import React, { Component } from 'react'

const GlobalSettingsContext = React.createContext()

export class GlobalSettingsProvider extends Component {
    state = {
        fontColor: 'purple'
    }

    changeFontColor = (color) => {
        this.setState({ fontColor: color })
    }

    render() {
        const { children } = this.props;
        return (
            <GlobalSettingsContext.Provider
                value={{
                    fontColor: this.state.fontColor,
                    changeFontColor: this.changeFontColor
                }}>
                {children}
            </GlobalSettingsContext.Provider>
        )
    }
}

export const GlobalSettingsConsumer = GlobalSettingsContext.Consumer