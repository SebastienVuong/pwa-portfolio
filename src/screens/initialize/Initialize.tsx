import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, ViewComponent } from "react-native";
import ScreenTemplate from '../../components/ScreenTemplate'
import { colors, fontSize } from "../../theme";
import { InitializeContext } from '../../contexts/InitializeContext'
import { TUser, UserContext, ViewModesEnum } from "../../contexts/UserContext";

export default function Initialize() {
  const { setIsInitialized } = useContext(InitializeContext)
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    try {
      const userData: TUser = {
        id: 'user-1234',
        userName: 'abcdef',
        viewMode: ViewModesEnum.DEV_MODE
      }
      setUser(userData)
    } catch (e) {
      console.log(e)
    } finally {
      setIsInitialized(true)
    }
  }, [])

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text style={styles.label}>Loading</Text>
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
  }
})