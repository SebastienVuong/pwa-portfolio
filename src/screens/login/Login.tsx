import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenTemplate from '../../components/ScreenTemplate'
import { colors, fontSize } from "../../theme";
import { TUser, UserContext, ViewModesEnum } from "../../contexts/UserContext";
import Button from '../../components/Button'

export default function Login() {
  const { setUser } = useContext(UserContext)

  const onLoginPress = () => {
    const userData: TUser = {
      id: 'user-1234',
      userName: 'abcdef',
      viewMode: ViewModesEnum.SPORTS_MODE
    }
    setUser(userData)
  }

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text style={styles.label}>Login Screen</Text>
        <View style={{ width: '50%' }}>
          <Button
            label='Login'
            onPress={onLoginPress}
            color={colors.lightPurple}
            desable={false}
            labelColor={colors.white}
          />
        </View>
      </View>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  label: {
    fontSize: fontSize.xxLarge,
    fontWeight: '500'
  },
})