const data = { name: "Sankar", age: 20, gender: "male" }

// child
function Welcome(props: { name: string; age: number }) {
  return (
    <p>Hello {props.name} Your age {props.age}</p>
  )
}

// parent - separated by key and value
export default function PropertiesSampleComponent() {

  // object spreading
  const data = { name: "Sankar", age: 20, gender: "male" }

  return (
    <>
      <Welcome name="Iserveu" age={10} />
      <Child {...data} />
      <DestructureSample />
    </>
  )
}

function Child({ name, age }: { name: string; age: number }) {
  return (
    <div>
      <p> name {name}</p>
      <p> age {age}</p>
    </div>
  )
}

// destructuring
function DestructureSample({ name = "Guest" }) {
  return (
    <p>Hello {name}</p>
  )
}