//ini adalah contoh pure function, lebih detailtnya sebenarnya parameternya dan return valuenya harus sama dan tidak boleh ada perubhaan misakjan param text nah dikembailakn
//dalam bentuk id atau text yang dalam bentuk string dan di return dengan nilai aslinya pada kasus kali ini
export default function Row({id, text}) {
     return (
          <tr>
               <td>{id}</td>
               <td>{text}</td>
          </tr>
     )
}