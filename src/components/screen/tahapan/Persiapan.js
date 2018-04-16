import React from 'react';
import Timeline from 'react-native-timeline-listview';

class Persiapan extends React.Component{
  constructor(){
    super()
    this.data = [
      { title: "31-Jul-17 / 3-Jan-18", description: "Syarat Dukungan Pasangan Calon Perseorangan" },
      { title: "8-Jan-18  / 10-Jan-18",  description: "Pendaftaran Pasangan Calon" },
      { title: "15-Feb-18 / 23-Jul-18",  description: "Masa Kampanye" },
      { title: "14-Feb-18 / 13-Jul-18",  description: "Laporan Audit dan Dana Kampanye" },
      { title: "17-Mar-18 / 26-Jun-18",  description: "Pengadaan dan Pendistribusian Perlengkapan Pemungutan dan Penghitungan Suara" },
      { title: "27-Jun-18 / 27-Jun-18",  description: "Pemungutan dan Penghitungan suara di TPS" },
      { title: "27-Jun-18 / 9-Jul-18", description: "Rekapitulasi Hasil Penghitungan Suara" }
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

export default Persiapan;
