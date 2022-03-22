import Head from "next/head"
import Navbar from "../components/Navbar"
export default function Course(){
    const data = [
      ['IF21202',	'Basis Data II',	'2',	'B',	'LASMEDI AFUAN',		'SENIN | Slot : 08:50:00 - 09:40:00 s.d 09:45:00 - 10:35:00 | Ruang GEDUNG TEKNIK E 304'],
      ['IF21203'	,'Struktur Data',	'3',	'A',	'EDDY MARYANTO',		'SELASA | Slot : 07:00:00 - 07:50:00 s.d 08:50:00 - 09:40:00 | Ruang F201'],
      [	'IF21205',	'Matematika Diskrit',	'3',	'B',	'IPUNG PERMADI',	'JUMAT | Slot : 07:00:00 - 07:50:00 s.d 08:50:00 - 09:40:00 | Ruang F201'],
      ['IF21208',	'Web Design',	'2','A',	'NURUL HIDAYAT',		'KAMIS | Slot : 13:00:00 - 13:50:00 s.d 13:55:00 - 14:45:00 | Ruang F201'	],
      ['IF21209',	'E-Commerce',	'2',	'B',	'NURUL HIDAYAT',		'KAMIS | Slot : 10:40:00 - 11:30:00 s.d 11:35:00 - 12:25:00 | Ruang F201'	],
      ['IF21206',	'Sistem Operasi'	,'3',	'B',	'ARIEF KELIK NUGROHO',		'RABU | Slot : 09:45:00 - 10:35:00 s.d 11:35:00 - 12:25:00 | Ruang GEDUNG TEKNIK E 304'],
      ['UNO101',	'Pancasila',	'2',	'A',	'MUSMUALLIM',	'SELASA | Slot : 10:40:00 - 11:30:00 s.d 11:35:00 - 12:25:00 | Ruang GEDUNG TEKNIK E 304'],
      ['UNO114',	'Jati Diri Unsoed',	'2',	'B',	'NURUL HIDAYAT',		'KAMIS | Slot : 07:00:00 - 07:50:00 s.d 07:55:00 - 08:45:00 | Ruang GEDUNG TEKNIK E 304'],
      ['	IF21204','	Praktikum Struktur Data',	'1',	'E',	'BANGUN WIJAYANTO',		'RABU | Slot : 14:50:00 - 15:40:00 s.d 14:50:00 - 15:40:00 | Ruang LAB. Pemrograman'],
      ['IF21207','	Praktikum Sistem Operasi',	'1',	'E',	'ARIEF KELIK NUGROHO',		'JUMAT | Slot : 16:00:00 - 16:50:00 s.d 16:00:00 - 16:50:00 | Ruang Lab. Multimedia'],
      ['IF21201',	'Probabilitas dan Statistika',	'2',	'B',	'YOGIEK INDRA KURNIAWAN',		'JUMAT | Slot : 09:45:00 - 10:35:00 s.d 10:40:00 - 11:30:00 | Ruang GEDUNG TEKNIK E 304']
    ]
    return (
        <div className="z-20 min-h-screen bg-gradient-to-br from-cyan-600 to-blue-800" >
        <Head>
          <title>Personal pages</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
         <Navbar/>
         <div className="flex justify-center flex-col py-12 px-48 mx-auto text-white ">
           <div className="text-4xl jet font-bold text-center py-8">College Schedule</div>
           <table>
             <tr  >
               <th>Kode Matkul</th>
               <th>Nama Mata Kuliah</th>
               <th>SKS</th>
               <th>Kelas</th>
               <th>Pengampu</th>
              
               <th>Jadwal</th>
             </tr>
             
                {
                  data.map(el => {
                    return (
                      <tr key={el}>
                        <td>{el[0]}</td>
                        <td>{el[1]}</td>
                        <td>{el[2]}</td>
                        <td>{el[3]}</td>
                        <td>{el[4]}</td>
                        <td>{el[5]}</td>
                        
                      </tr>
                    )
                  })
                  }
                
            
           </table>
         </div>
      </div>
    )
}