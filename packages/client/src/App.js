import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const q = gql`
  {
    products {
      title
      description
      material
      price
      description
      images {
        url
      }
      category {
        title
      }
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Query query={q}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.products.map(({ title, id, material }) => (
            <div key={id}>
              <p>{title}</p>

              <div>
                - <p>material: {material}</p>
              </div>
            </div>
          ));
        }}
      </Query>
    </div>
  );
}

export default App;
