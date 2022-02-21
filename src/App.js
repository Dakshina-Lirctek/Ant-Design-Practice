import React, { useState } from "react";
import {
  Form,
  Card,
  Button,
  Input,
  Radio,
  Checkbox,
  Row,
  Col,
  Select,
  DatePicker,
  Slider,
  Switch,
  Typography,
  Space,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useForm } from "rc-field-form";

export default function App() {
  const { Option } = Select;
  const dateFormat = "DD/MM/YYYY";
  const [formValues, setFormValues] = useState([]);
  console.log(formValues.name);
  const { Text, Title } = Typography;
  const [form] = useForm();
  const resetFormFields = () => {
    form.resetFields();
  };
  const onSubmit = async (values) => {
    let payload = {
      name: values.name,
      password: values.password,
      email: values.email,
      qualification: values.qualification,
      salary: values.salary,
      hobbies: values.hobbies,
      dob: values.dob,
    };
    console.log(payload)
    const data = await payload;
    console.log(data.dob)
    setFormValues(data);
  };
  
  return (
    <div>
      <Card className="mv2">
      <Form
        onFinish={onSubmit}
        scrollToFirstError
        layout="vertical"
        style={{ width: "70%", margin: "auto" }}
      >
        <Title mark align="center">STUDENT FORM</Title>
        <Row gutter={[16, 8]} align="middle">
          <Col xs={12} lg={8}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "please enter the name",
                },
              ]}
            >
              <Input autoFocus placeholder="Name" maxLength={16}></Input>
            </Form.Item>
          </Col>
          <Col xs={12} lg={8}>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "please enter the password",
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              ></Input.Password>
            </Form.Item>
          </Col>
          <Col xs={12} lg={8}>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  required: true,
                  message: "please enter the emailId",
                },
              ]}

            >
              <Input type={"email"} placeholder="E-mail"></Input>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]} align="middle">

          <Col xs={12} lg={8}>
            <Form.Item
              name="qualification"
              label="Qualification"
              rules={[
                {
                  required: true,
                  message: "please select the Qualification",
                },
              ]}
            >
              <Select defaultValue={"diplomo"}>
                <Option value="10/+2">10/+2</Option>
                <Option value="diplomo">Diplomo</Option>
                <Option value="under graduate">Under Graduate</Option>
                <Option value="post graduate">Post Graduate</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={12} lg={8}>
            <Form.Item
              name="salary"
              label="Salary"
              rules={[
                {
                  required: true,
                  message: "please select your salary",
                },
              ]}
            >
              <Radio.Group defaultValue="10-20k" buttonStyle="solid">
                <Radio.Button value="10-20k">10-20k</Radio.Button>
                <Radio.Button value="20-40k">20-40k</Radio.Button>
                <Radio.Button value="40-80k">40-80k</Radio.Button>
              </Radio.Group>
            </Form.Item>

          </Col>

          <Col xs={12} lg={8}>
            <Form.Item name="hobbies" label="Hobbies">
              <Checkbox.Group defaultValue="hockey">
                <Checkbox value="cricket">Cricket</Checkbox>
                <Checkbox value="hockey">Hockey</Checkbox>
                <Checkbox value="volleyball">Volleyball</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Col>

        </Row>
        <Row gutter={[16, 8]} align="middle">

          <Col xs={12} lg={8}>
            <Form.Item name="dob" label="DOB">
              <DatePicker format={dateFormat} />
            </Form.Item>
          </Col>

          <Col xs={12} lg={8}>
            <Form.Item name="age" label="Age">
              <Slider defaultValue={18} />
            </Form.Item>
          </Col>

          <Col xs={12} lg={8}>
            <Form.Item name="check" label="Check">
              <Switch />
            </Form.Item>
          </Col>

        </Row>
        <Row gutter={[24]} align="middle">

          <Col xs={22} align="middle">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>

        </Row>
      </Form>
      <Space direction="vertical">
        
        <Text strong> Name : {formValues.name} </Text>
        <Text delete> Password : {formValues.password} </Text>
        <Text type="success"> E-mail : {formValues.email} </Text>
        <Text type="default"> Qualification : {formValues.qualification} </Text>
        <Text mark> salary : {formValues.salary} </Text>
        
      </Space>

      </Card>
    </div>
  );
}
