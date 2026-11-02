import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { locations, locationGroups } from '../src/data/locations.ts';
import { blueMapIds } from '../src/data/bluemap.ts';

const destination = 'bluemap/markers';
const verify = process.argv.includes('--check');

function htmlEscape(text) {
  return text.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;').replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderDimension(dimension) {
  const lines = [
    '# Generated from src/data/locations.ts. Do not edit manually.',
    '# Merge ONLY the marker-sets block into the existing BlueMap maps/<id>.conf.',
    '# Never replace the world, storage or rendering settings of an existing map.',
    'marker-sets: {'
  ];
  for (const [index, group] of locationGroups.entries()) {
    const places = locations.filter(place => place.dimension === dimension && place.group === group);
    if (places.length === 0) continue;
    lines.push(`  "weab-${index}": {`);
    lines.push(`    label: ${JSON.stringify(group === 'Farmer' ? 'WeKill · Farmer' : group)}`);
    lines.push('    toggleable: true');
    lines.push(`    default-hidden: ${group === 'Spelarbaser'}`);
    lines.push(`    sorting: ${index}`);
    lines.push('    markers: {');
    for (const place of places) {
      const companyLink = place.relatedPage
        ? `<br><a href="https://weab.nu${place.relatedPage}" target="_blank" rel="noopener noreferrer">Läs om platsen på WeAB.nu</a>`
        : '';
      const description = `<strong>${htmlEscape(place.name)}</strong><br>${htmlEscape(
        place.owner ? `Ägare: ${place.owner} · ${place.group}` : place.group
      )}<br>X ${place.x} / Y ${place.y} / Z ${place.z}${companyLink}`;
      lines.push(`      ${JSON.stringify(place.id)}: {`);
      lines.push('        type: "poi"');
      lines.push(`        position: { x: ${place.x}, y: ${place.y}, z: ${place.z} }`);
      lines.push(`        label: ${JSON.stringify(place.name)}`);
      lines.push(`        detail: ${JSON.stringify(description)}`);
      lines.push('        listed: true');
      lines.push('      }');
    }
    lines.push('    }');
    lines.push('  }');
  }
  lines.push('}', '');
  return lines.join('\n');
}

mkdirSync(destination, { recursive: true });
for (const dimension of ['overworld', 'the_nether', 'the_end']) {
  const file = join(destination, `${blueMapIds[dimension]}.conf`);
  const expected = renderDimension(dimension);
  if (verify) {
    let actual = '';
    try {
      actual = readFileSync(file, 'utf8');
    } catch {
      console.error(`Saknad BlueMap-markörkonfiguration: ${file}`);
      process.exitCode = 1;
      continue;
    }
    if (actual !== expected) {
      console.error(`Inaktuell BlueMap-markörkonfiguration: ${file}. Kör npm run bluemap:markers`);
      process.exitCode = 1;
    }
  } else {
    writeFileSync(file, expected);
    console.log(`Genererad: ${file}`);
  }
}
if (verify && process.exitCode !== 1) console.log('BlueMap-markörer matchar innehållsregistret.');
