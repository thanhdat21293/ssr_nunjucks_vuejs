<!DOCTYPE html>
<html lang="en">
  <head>
      <title>Hello</title>
  </head>
  <body>
      {{ url }}
        <br><br>
        <table>
            <tr>
                <td>ID</td>
                <td>First name</td>
                <td>Last name</td>
                <td>Email</td>
                <td>Gender</td>
                <td>IP address</td>
                <td>address</td>
            </tr>
                <tr v-for="item in data1">
                    <td>{{ item.id }}</td>
                    <td>{{ item.first_name }}</td>
                    <td>{{ item.last_name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.gender }}</td>
                    <td>{{ item.ip_address }}</td>
                    <td>{{ item.address }}</td>
                </tr>
        </table>

  </body>
</html>