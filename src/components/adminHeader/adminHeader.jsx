



function AdminHeader() {
  return (
    <Nav variant="tabs" defaultActiveKey="/" className="justify-content-end">
      <Nav.Item>
        <Nav.Link href="/">INICIO</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">CREAR PACIENTE</Nav.Link>
      </Nav.Item>
        </Nav>
  );
}

export default AdminHeader;