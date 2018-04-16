import React from 'react';
import { View } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import HeaderFuntion from '../../common/HeaderFunction';

class Penyelenggaraan extends React.Component{
  constructor(){
    super()
    this.data = [
      { title: "27-Sep-2017 s/d 27-Sep-2017", description: "Perencanaan Program dan Anggaran", },
      { title: "27-Sep-2017 s/d 27-Sep-2017", description: "Penyusunan dan Penandatanganan Naskah Perjanjian Hibah Daerah (NPHD)", },
      { title: "31-May-2018 s/d 31-May-2018", description: "Penyusunan dan Pengesahan Peraturan Penyelenggaraan Pemilihan", },
      { title: "14-Jun-2017 s/d 23-Jun-2018", description: "Sosialisasi kepada Masyarakat", },
      { title: "14-Jun-2017 s/d 26-Jun-2018", description: "Penyuluhan/Bimbingan Teknis Kepada KPU Provinsi/KIP Aceh, KPU/KIP Kabupaten/Kota, PPK, PPS dan KPPS", },
      { title: "2-Oct-2017  s/d 3-Jun-2018" ,  description: "Pembentukan PPK, PPS, dan KPPS", },
      { title: "12-Oct-2017 s/d 11-Jun-2018", description: "Pemantauan Pemiliham", },
      { title: "24-Nov-2017 s/d 30-Dec-2017", description: "Pengolahan Daftar Penduduk Potensial Pemilih Pemilihan (DP4)", },
      { title: "30-Dec-2017 s/d 27-Jun-2018", description: "Pemutakhiran Data dan Daftar Pemilih", }
    ]
  }
  
  render(){
    return(
        <View style={{ flex: 1 }}>
          <HeaderFuntion onPress={() => this.props.navigation.goBack()}/>
          <Timeline
            data={this.data}
            showTime={false}
            descriptionStyle={{ color: 'gray', fontSize: 16}}
          />
        </View>
    )
  }
}

export default Penyelenggaraan;
