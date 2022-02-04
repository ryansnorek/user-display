export default function Search({ query, handleChange }) {
    return (
        <header className="search">
          <input
              name="name"
              type="search"
              placeholder="Search by name"
              value={query.name}
              onChange={handleChange}
          />
          <input
              name="tag"
              type="search"
              placeholder="Search by tag"
              value={query.tag}
              onChange={handleChange}
          />
        </header>
    );
  }
  