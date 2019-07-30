import uuid from '@chuckmah/modul-components/dist/utils/uuid/uuid';

// jest.mock('../../../../node_modules/@ulaval/modul-components/dist/utils/uuid/uuid');
(uuid.generate as jest.Mock).mockReturnValue('uuid');
