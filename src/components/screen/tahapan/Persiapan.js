import React from 'react';
import { View } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import HeaderFuntion from '../../common/HeaderFunction';

class Persiapan extends React.Component{
  constructor(){
    super()
    this.data = [
      { title: "31-Jul-17 s/d 3-Jan-18", description: "Syarat Dukungan Pasangan Calon Perseorangan" },
      { title: "8-Jan-18  s/d 10-Jan-18",  description: "Pendaftaran Pasangan Calon" },
      { title: "15-Feb-18 s/d 23-Jul-18",  description: "Masa Kampanye" },
      { title: "14-Feb-18 s/d 13-Jul-18",  description: "Laporan Audit dan Dana Kampanye" },
      { title: "17-Mar-18 s/d 26-Jun-18",  description: "Pengadaan dan Pendistribusian Perlengkapan Pemungutan dan Penghitungan Suara" },
      { title: "27-Jun-18 s/d 27-Jun-18",  description: "Pemungutan dan Penghitungan suara di TPS" },
      { title: "27-Jun-18 s/d 9-Jul-18", description: "Rekapitulasi Hasil Penghitungan Suara" }
    ]
  }
  
  render(){
    return(
      <View style={{ flex: 1 }}>
        <HeaderFuntion onPress={() => this.props.navigation.goBack() }/>
        <Timeline
          data={this.data}
          showTime={false}
          descriptionStyle={{ color: 'gray', fontSize: 16}}
        />
      </View>
    )
  }
}

export default Persiapan;
