import React from 'react';
import Timeline from 'react-native-timeline-listview';

class Penyelenggaraan extends React.Component{
  constructor(){
    super()
    this.data = [
      { title: "27-Sep-2017 / 27-Sep-2017", description: "Perencanaan Program dan Anggaran", },
      { title: "27-Sep-2017 / 27-Sep-2017", description: "Penyusunan dan Penandatanganan Naskah Perjanjian Hibah Daerah (NPHD)", },
      { title: "31-May-2018 / 31-May-2018", description: "Penyusunan dan Pengesahan Peraturan Penyelenggaraan Pemilihan", },
      { title: "14-Jun-2017 / 23-Jun-2018", description: "Sosialisasi kepada Masyarakat", },
      { title: "14-Jun-2017 / 26-Jun-2018", description: "Penyuluhan/Bimbingan Teknis Kepada KPU Provinsi/KIP Aceh, KPU/KIP Kabupaten/Kota, PPK, PPS dan KPPS", },
      { title: "2-Oct-2017  / 3-Jun-2018" ,  description: "Pembentukan PPK, PPS, dan KPPS", },
      { title: "12-Oct-2017 / 11-Jun-2018", description: "Pemantauan Pemiliham", },
      { title: "24-Nov-2017 / 30-Dec-2017", description: "Pengolahan Daftar Penduduk Potensial Pemilih Pemilihan (DP4)", },
      { title: "30-Dec-2017 / 27-Jun-2018", description: "Pemutakhiran Data dan Daftar Pemilih", }
    ]
  }
  
  render(){
    return(
        <Timeline
          data={this.data}
          showTime={false}
          descriptionStyle={{ color: 'gray', fontSize: 16}}
        />
    )
  }
}

export default Penyelenggaraan;
