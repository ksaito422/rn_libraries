import React from 'react';
import { View, Text } from 'react-native';

export class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error instanceof Error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('error');
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { state, props } = this;
    console.log(state.hasError);
    if (state.hasError) {
      return (
        <View style={{ backgroundColor: 'red' }}>
          <Text>ここはErrorBoundaryによって表示されているエラー用のコンポーネントです</Text>
        </View>
      );
    }

    return props.children;
  }
}
