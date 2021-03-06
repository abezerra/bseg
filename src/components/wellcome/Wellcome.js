import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

//styles
import css from '../../../styles/offers-style'

export default class Offers extends Component{

  render(){

    return(
      <ScrollView style={ css.main }>

        <View style={ css.featured }>
            <Text style={ css.featuredText }>Bem vindo, Fulano de talco</Text>
            
          <View style={ css.list_food }>
            <View style={ css.list_food_item }>

                <TouchableHighlight onPress={ Actions.brasilian_food() }>
                  <Image source={ dish } style={ css.list_food_item_image }>
                    <Text style={ css.textOfDescriptionOfImage } >Almoçu Brasileiro</Text>
                  </Image>
                </TouchableHighlight>



                <TouchableHighlight>
                  <Image source={ omelet } style={ css.list_food_item_image }>
                    <Text style={ css.textOfDescriptionOfImage } >Pressa de almoço</Text>
                  </Image>
                </TouchableHighlight>



            </View>

            <View style={ css.list_food_item }>

                <TouchableHighlight>
                  <Image source={ leve } style={ css.list_food_item_image }>
                    <Text style={ css.textOfDescriptionOfImage } >Almoço levinho</Text>
                  </Image>
                </TouchableHighlight>




                <TouchableHighlight>
                  <Image source={ lanche } style={ css.list_food_item_image }>
                    <Text style={ css.textOfDescriptionOfImage } >Almolanche</Text>
                  </Image>
                </TouchableHighlight>



            </View>
          </View>

        </View>
      </ScrollView>
    )
  }
}
