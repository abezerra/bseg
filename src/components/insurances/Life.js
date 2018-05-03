/* eslint-disable react/jsx-filename-extension */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  
} from 'react-native';
import Modal from "react-native-modal";
import css from '../../styles/MyInsurances-style';

const LIFE = require('../../../assets/img/icons/healt_gray.png');
import axios from 'axios';
import styles from "../app.style";
import { api } from "../../../env";

export default class LifeInsurance extends Component {
  state = {
    modalVisible: false,
    visibleModal: null
  };
  listCoverage = this.props.item.coverage.map((c) => {
    return (
      <View style={css.viewOfCoveragesFor} key={c.id}>
        <Text>{c.coverage}</Text>
        <Text>Valor: {c.value}</Text>
        <Text>Franquia: {c.franchise}</Text>
      </View>
    )
  });
  
  constructor(props) {
    super(props);
  }
  
  toggleModal(visible) {
    this.setState({modalVisible: visible})
  }
  
  show(id) {
    axios.get(`${api.apiUrl}/${id}`)
      .then((response) => {
        this.setState({
          insurance: response.data,
          coverage: response.data.coverage
        });
        console.log('Insurrance show', this.state);
      })
      .catch(err => console.log('erro ao trazer dados', err));
  }
  
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress} underlayColor="#328fe6" style={css.buttonClose}>
      <View>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  
  _renderModalContent = () => (
    <View style={styles.modalContent}>
      
      <ScrollView style={{marginLeft: 25,}}>
        <Text style={css.titlesOfDetailsOfInsurance}>Seguradora</Text>
        <Text>Seguradora: {this.props.item.insurer}</Text>
        <Text>Central de atendimento: {this.props.item.insurer}</Text>
        
        <Text style={css.titlesOfDetailsOfInsurance}>Bem</Text>
        <Text>Segurado: {this.props.item.client.name}</Text>
        <Text>CPF: {this.props.item.client.cpf}</Text>
        <Text>Nascimento: {this.props.item.client.birth}</Text>
        <Text>E-mail: {this.props.item.client.email}</Text>
        <Text>Contato: ({this.props.item.client.ddd_cellphone}) {this.props.item.client.cellphone}</Text>
        <Text>Whatsapp: ({this.props.item.client.ddd_cellphone}) {this.props.item.client.whatsapp}</Text>
        <Text>Apolice: {this.props.item.apoliceNumber}</Text>
        
        <Text style={css.titlesOfDetailsOfInsurance}>Apolice</Text>
        <Text>Apolice: {this.props.item.apoliceNumber}</Text>
        
        <Text style={css.titlesOfDetailsOfInsurance}>Dados de pagamento</Text>
        <View>
          <Text>Parcela </Text>
          <Text>Vencimento </Text>
          <Text>Valor </Text>
        </View>
        
        <Text style={css.titlesOfDetailsOfInsurance}>Coberturas</Text>
        {this.listCoverage}
      </ScrollView>
      {this._renderButton("FECHAR", () => this.setState({ visibleModal: null }))}
    </View>
  );
  
  __renderLifeInsurance = () => (
    <View style={css.cardBoxOfInsurance}>
      
      <View style={css.nameAndIconOfInsurance}>
        <Image source={LIFE} style={css.iconOfInsurance}/>
        <Text style={css.textOfNameOfInsurance}>
          Seguro de Vida
        </Text>
      </View>
  
      <View style={css.insurerMinimalInformations}>
    
        <View style={css.textAndYourBall}>
          <View style={css.circle_green} />
          <Text style={css.assetsAndInsurerInformations}>
            Segurado: {this.props.item.client.name}
          </Text>
        </View>
    
        <View style={css.textAndYourBall}>
          <View style={css.circle_green} />
          <Text style={css.assetsAndInsurerInformations}>
            Seguradora: {this.props.item.insurer}
          </Text>
        </View>
      </View>
  
      <View style={css.details}>
        <View style={css.textLeft}>
          <Text style={css.textLeftContent}> Apóice: {this.props.item.apoliceNumber} </Text>
        </View>
    
        <View style={css.textRigth}>
          <Text style={css.textRigthContent}>Vigência: {this.props.item.validity}</Text>
        </View>
  
      </View>
  
      <View style={css.theBatton}>
        <TouchableOpacity
          style={css.button}
          underlayColor="#328fe6"
          onPress={() => {
            this.show(this.props.item.id),
              this.setState({ visibleModal: 7 })
          }}>
          <Text style={css.label}>VISUALIZAR COBERTURA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
  
  
  
  render() {
    return (
      <View style={css.container}>
        {this.__renderLifeInsurance()}
        <Modal
          isVisible={this.state.visibleModal === 7}>
          {this._renderModalContent()}
        </Modal>
      </View>
    
    
    );
  }
}

